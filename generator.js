function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickExcluding(arr, exclude) {
    const filtered = arr.filter(item => !exclude.has(item));
    if (filtered.length === 0) return pick(arr);
    return pick(filtered);
}

function expand(str) {

    let result = str;
    const seen = {};  // track picks per token key to avoid dupes

    for (let i = 0; i < 10; i++) { // prevents infinite loops

        // optional tokens: {?KEY} → 50% chance to appear, 50% gone
        result = result.replace(/\{\?(\w+)\}/g, (_, key) => {
            if (Math.random() < 0.5) return "";
            const pool = TOKENS[key];
            if (!pool) return "";
            if (!seen[key]) seen[key] = new Set();
            const value = pickExcluding(pool, seen[key]);
            seen[key].add(value);
            return value;
        });

        // required tokens: {KEY}
        result = result.replace(/\{(\w+)\}/g, (_, key) => {
            const pool = TOKENS[key];
            if (!pool) return "";
            if (!seen[key]) seen[key] = new Set();
            const value = pickExcluding(pool, seen[key]);
            seen[key].add(value);
            return value;
        });

        if (!result.match(/\{.*?\}/)) break;
    }

    return result;
}

// history dedup: remember recent templates to avoid repetition
const recentTemplates = [];
const HISTORY_SIZE = 5;

function pickTemplate() {
    // try a few times to avoid recently used templates
    for (let attempt = 0; attempt < 10; attempt++) {
        const idx = Math.floor(Math.random() * TEMPLATES.length);
        if (!recentTemplates.includes(idx) || attempt === 9) {
            recentTemplates.push(idx);
            if (recentTemplates.length > HISTORY_SIZE) recentTemplates.shift();
            return TEMPLATES[idx];
        }
    }
    return pick(TEMPLATES);
}

function generateHeadline() {

    const template = pickTemplate();
    const headline = expand(template) + pick([".", ".", "", "", "??"]);

    return headline
        .replace(/\s+/g, " ")
        .replace(/\s+([?.!,])/g, "$1")
        .replace(/^,\s*/, "")
        .trim()
        .replace(/^./, c => c.toUpperCase());
}

function render() {
    document.getElementById("headline").textContent = generateHeadline();
}

document.getElementById("refresh").addEventListener("click", render);

render();
