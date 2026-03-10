const TEMPLATES = [
    "{REACTION_NEG} {TRACKER} mods just {VERB} {USER} for {ACTION}",
    "{REACTION_NEG} {TRACKER} staff just {VERB_EXTRA} for {ACTION}",
    "BREAKING: {TRACKER} just {VERB_BIGTIME}",
    "{TRACKER} rules are ridiculous. Just got suspended for {ACTION}",
    "BREAKING: {TRACKER} staff just banned {FEATURE}",
    "{REACTION_NEG} Just got {VERB} from {TRACKER} for {ACTION}",
    "{REACTION_NEG} {TRACKER} just {VERB_EXTRA}",
    "When will the autobrr team make a replacement for {SAVE_US_AUTOBRR}?",
    "{REACTION_NEUTRAL} {TRACKER} just {VERB} {USER} for {ACTION}",
    "{REACTION_NEUTRAL} {TRACKER} is now recruiting on {RECRUITMENT}",
    "{REACTION_NEUTRAL} {TRACKER} just stopped allowing {FEATURE}",
    "{THINK} {TRACKER} will be cabal in {YEAR} years",
    "{THINK} {TRACKER} is about to overtake {TRACKER}",
    "{REACTION_NEUTRAL} {TRACKER} is about to overtake {TRACKER}"
];

const TOKENS = {
    TRACKER: [
        "Aither",
        "Blutopia",
        "PTP",
        "GGn",
        "MAM",
        "ULCX",
        "RED",
        "OPS",
        "BHD",
        "MTV",
        "BTN",
        "FNP",
        "seedpool",
    ],

    REACTION_NEG: [
        "HELP!",
        "Ugh, I'm done.",
        "I can't believe this.",
        "Wow.",
        "I can't believe it.",
        "Be careful:",
        ],
        
    REACTION_NEUTRAL: [
        "Guys,",
        "Did you hear?",
    ],

    USER: [
        "me",
        "a user"
    ],

    VERB: [
        "banned",
        "muted",
        "suspended"
    ],

    VERB_EXTRA: [
        "revoked my upload rights",
        "revoked my download rights",
        "disabled my avatar",
        "changed my profile to something horrible",
        "killed my parents",
        "deleted my seedbox",
        "hacked into my homelab",
        "removed my TRaSH guides sync",
        "deleted my qui",
        "stopped all my cross-seeding",
    ],

    VERB_BIGTIME: [
        "deleted the tracker",
        "leaked the invite tree",
        "made anime mandatory",
        "banned anime",
        "reset everyone's ratio",
        "disabled seeding",
        "merged with IPT",
        "got hacked by ex-{TRACKER} staff"
    ],

    ACTION: [
        "reading the rules",
        "seeding anime",
        "having a positive ratio",
        "using a seedbox",
        "being nice to a corgi",
        "talking smack about a thimble",
        "letting my ratio go negative",
        "posting a meme in the forums",
        "asking about freeleech",
        "posting a screenshot of the rules",
        "even THINKING about cabal",
        "submitting a help ticket",
        "trying to use the tag -Kitsune",
        "trying to use the tag -NTb",
        "trying to use the tag -hallowed",
        "sending feet pics to mods",
        "not sending feet pics to mods",
        "calling you-know-who a femboy",
        "uploading Dailymotion fanres",
        "not wearing a hat"
    ],

    RECRUITMENT: [
        "the UA Discord",
        "Seadex",
        "Reddit",
        "cross-seed's Discord",
        "Chaptarr Discord",
        "preDB",
        "autobrr's GitHub issues"
    ],

    SAVE_US_AUTOBRR: [
        "TRaSH guides",
        "Huntarr",
        "Seadex",
        "qui",
        "Linux",
        "IRC",
        "autobrr",
        "Deluge",
        "Unraid",
        "mergerFS",
        "Bazarr",
        "Readarr",
        "ZFS",
    ],

    FEATURE: [
        "internals",
        "upload stats",
        "BON",
        "friend lists",
        "forums",
        "torrents"
    ],

    YEAR: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "10",
        "15",
        "20"
    ],

    THINK: [
        "I think",
        "I genuinely think",
        "I strongly believe"
    ]

};
