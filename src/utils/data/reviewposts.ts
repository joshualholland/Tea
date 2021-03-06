export const posts: Array<IPosts> = [
  {
    name: 'Gorilla Glue #4',
    thc: '19',
    cbd: '0',
    body: 'Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.',
    user: {
      username: 'CannapiUser1234'
    }
  },
  {
    name: 'Alien OG',
    thc: '18',
    cbd: '0',
    body: 'Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.',
    user: {
      username: 'CannapiUser1234'
    }
  }
]

interface IPosts {
  name: string,
  thc: string,
  cbd: string,
  body: string,
  user: { username: string }
}