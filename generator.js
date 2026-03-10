function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function expand(str) {

    let result = str;

    for (let i = 0; i < 10; i++) { // prevents infinite loops
        result = result.replace(/\{(.*?)\}/g, (_, key) => {
            const pool = TOKENS[key];
            if (!pool) return "";
            return pick(pool);
        });

        if (!result.match(/\{.*?\}/)) break;
    }

    return result;
}

function generateHeadline() {

    const template = pick(TEMPLATES);
    const headline = expand(template);

    return headline
        .replace(/\s+/g, " ")
        .replace(/\s+([?.!,])/g, "$1")
        .replace(/^,\s*/, "")
        .trim();
}

function render() {
    document.getElementById("headline").textContent = generateHeadline();
}

document.getElementById("refresh").addEventListener("click", render);

render();