import { normalizeNaszekaszuby } from './normalizeNaszekaszuby';

it('the entries of Naszekaszuby were correctly pre-processed', () => {
  const inputValue = [
    {
      name_polnisch: 'Gdańsk',
      name_kaschubisch: 'Gdóńsk, Gdóńskò, Gdańsk, Gdańskò, Gdônsk, Gdôńsk, Stôré Miasto',
      powiat: 'GD',
      idx: 334,
    },
    { powiat: 'GD', name_kaschubisch: 'Gdóńsk' },
  ];
  const expectedValue = normalizeNaszekaszuby(inputValue);
  expect(expectedValue).toEqual([
    {
      name: 'Gdańsk',
      name_kaschubisch: 'Gdóńsk, Gdóńskò, Gdańsk, Gdańskò, Gdônsk, Gdôńsk, Stôré Miasto',
      powiat: 'GD',
      id: '334',
    },
  ]);
});
