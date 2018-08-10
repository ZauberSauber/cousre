export default courseStructure = {
    courseTitle: 'Privet, ya nazvanie',
    chapters: [
        {
            title: 'Chast 1',
            type: 'intro',
            pages: [
                {
                    type: 'simple',
                    title: 'page 1-1',
                    data: {}
                }
            ]
        }, {
            title: 'Chast 2',
            type: 'content',
            pages: [
                {
                    type: 'simple',
                    title: 'page 1-2'
                },{
                    type: 'simple',
                    title: 'page 2-2'
                }
            ]
        }
    ]
};
