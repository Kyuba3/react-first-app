const initialState = {
  columns: [
    {
      id: '1',
      title: 'Books',
      icon: 'book',
      listId: '1',
    },
    {
      id: '2',
      title: 'Movies',
      icon: 'film',
      listId: '1',
    },
    {
      id: '3',
      title: 'Games',
      icon: 'gamepad',
      listId: '1',
    },
    {
      id: '4',
      title: 'Test',
      icon: 'music',
      listId: '2',
    },
  ],

  cards: [
    { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavorite: true},
    { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavorite: false},
    { id: '3', columnId: '2', title: 'Lost in Space', isFavorite: false},
    { id: '4', columnId: '2', title: 'Star Wars', isFavorite: true},
    { id: '5', columnId: '3', title: 'FIFA 2023', isFavorite: true},
    { id: '6', columnId: '3', title: 'Skyrim', isFavorite: false}
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
   }
  ],

  searchString: '', 

};

export default initialState;