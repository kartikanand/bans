const banList = [
    {
        title: 'test-title',
        desc: 'test-desc',
        id: 1,
        state: 'all',
        category: 'information'
    },
    {
        title: 'test-title1',
        desc: 'test-desc1',
        id: 2,
        state: 'Punjab',
        category: 'books'
    },
    {
        title: 'test-title2',
        desc: 'test-desc2',
        id: 3,
        state: 'Karnataka',
        category: 'information'
    },
    {
        title: 'test-title3',
        desc: 'test-desc3',
        id: 4,
        state: 'UP',
        category: 'public'
    },
    {
        title: 'test-title4',
        desc: 'test-desc4',
        id: 5,
        state: 'Delhi',
        category: 'food'
    },
];

let categories = [];
let states = [];

banList.forEach((ban) => {
    categories.push(ban.category);
    states.push(ban.state);
});


export {categories, states};
export default banList;
