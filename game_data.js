const GAME_DB = {
    // --- CONFIGURATION ---
    config: {
        xpBase: 100,
        xpMultiplier: 1.4,
        xpPerTask: 10,
    },

    // --- ITEM DATABASE (The Lookup Table) ---
    items: {
'coin': {   id: 'coin', image: 'assets/items/coinofalexandria.png',  name: 'Coin of YM', 
            description: 'Ancient coin of a sunken city.<br><br><span class="text-yellow-400">+10% XP Gain</span>',
            effect: { stat: 'wisdom', value: 1 }, unlock: { type: 'level', value: 2 }, bonus: { stat: 'xp', multiplier: 0.1 } },
'goldenleaf': {
            id: 'goldenleaf', image: 'assets/items/goldenleaf.png', name: 'Golden Leaf',
            description: 'A leaf made from gold as if touched by Midas.<br><br><span class="text-yellow-400">+5% Wisdom Gain</span>',
            effect: { stat: 'vitality', value: 1 }, unlock: { type: 'stat', stat: 'strength', value: 2 }, bonus: { stat: 'wisdom', multiplier: 0.05 } },
'pavese': {
            id: 'pavese', image: 'assets/items/pavese.png', name: 'Great Shield',
            description: 'An oaken Pavese shield.<br><br><span class="text-yellow-400">+5% Strength Gain</span>',
            effect: { stat: 'strength', value: 1 }, unlock: { type: 'stat', stat: 'strength', value: 1 }, bonus: { stat: 'strength', multiplier: 0.05 }}
    },

    // --- STATIC LISTS ---
    categories: [
        { id: 'strength', label: 'Strength', color: 'bg-red-200/30 text-red-300 border-red-300/50', barColor: 'bg-red-400', letter: 'S' },
        { id: 'wisdom', label: 'Wisdom', color: 'bg-blue-200/30 text-blue-300 border-blue-300/50', barColor: 'bg-blue-400', letter: 'W' },
        { id: 'dexterity', label: 'Dexterity', color: 'bg-green-200/30 text-green-300 border-green-300/50', barColor: 'bg-green-400', letter: 'D' },
        { id: 'endurance', label: 'Endurance', color: 'bg-orange-200/30 text-orange-300 border-orange-300/50', barColor: 'bg-orange-400', letter: 'E' },
        { id: 'mind', label: 'Mind', color: 'bg-purple-200/30 text-purple-300 border-purple-300/50', barColor: 'bg-purple-400', letter: 'M' },
        { id: 'quartermastery', label: 'Quartermastery', color: 'bg-yellow-200/30 text-yellow-300 border-yellow-300/50', barColor: 'bg-yellow-400', letter: 'Q' },
        { id: 'stewardship', label: 'Stewardship', color: 'bg-emerald-200/30 text-emerald-300 border-emerald-300/50', barColor: 'bg-emerald-400', letter: 'S' },
        { id: 'magic', label: 'Magic', color: 'bg-pink-200/30 text-pink-300 border-pink-300/50', barColor: 'bg-pink-400', letter: 'M' },
        { id: 'vitality', label: 'Vitality', color: 'bg-rose-200/30 text-rose-300 border-rose-300/50', barColor: 'bg-rose-400', letter: 'V' },
        { id: 'willpower', label: 'Willpower', color: 'bg-indigo-200/30 text-indigo-300 border-indigo-300/50', barColor: 'bg-indigo-400', letter: 'W' }
    ],

    quickTasks: [
        { name: 'Training', categories: ['strength', 'endurance'] },
        { name: 'Meditation', categories: ['wisdom', 'mind'] },
        { name: 'Stretch', categories: ['strength', 'dexterity'] },
        { name: 'Walk', categories: ['endurance', 'vitality'] },
        { name: 'Vitamins', categories: ['vitality'] },
        { name: 'Rations', categories: ['quartermastery'] },
        { name: 'Cleaning', categories: ['stewardship'] },
        { name: 'Cooking', categories: ['quartermastery'] },
        { name: 'Guitar', categories: ['dexterity'] },
        { name: 'Zen', categories: ['wisdom', 'mind', 'willpower'] },
        { name: 'Cleaning', categories: ['stewardship'] }
    ]
};