export const posts: Array<IPosts> = [
  {
    title: 'I am the Post Title',
    strain: 'Gorilla Glue #4',
    body: 'Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.',
    photo: '/img/Cannapi_Items.jpg',
    user: {
      username: 'CannapiUser1234'
    }
  },
  {
    title: 'I am the second post title',
    strain: 'Alien OG',
    body: 'Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Turpis cursus in hac habitasse platea dictumst quisque. Vitae turpis massa sed elementum tempus egestas sed sed. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Fringilla ut morbi tincidunt augue interdum velit. Morbi non arcu risus quis varius quam. Senectus et netus et malesuada fames ac turpis. Consequat interdum varius sit amet. Vel orci porta non pulvinar neque. Ante metus dictum at tempor commodo ullamcorper. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magna ac placerat vestibulum lectus mauris ultrices eros in. Quis blandit turpis cursus in hac.',
    photo: '/img/Cannapi_Items.jpg',
    user: {
      username: 'CannapiUser1234'
    }
  }
]

interface IPosts {
  title: string,
  strain: string,
  body: string,
  photo: string,
  user: { username: string }
}