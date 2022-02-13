import React from 'react';

import Head from 'next/head';
import UIBuilder from './UIBuilder';

export default function Home() {
  // const [activePage, setActivePage] = useState(0);

  // const onPageChangeMemoized = React.useCallback(onPageChange, []);

  return (
    <>
      <Head>
        <title>James Christian</title>
        <link rel="icon" href="/james-favicon.ico" />
      </Head>
      <div className="mx-auto xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-screen-sm my-7">
        <UIBuilder nodes={NODES} templates={API_TEMPLATES} apis={API_CONFIG} />
      </div>
    </>
  );
}

const API_CONFIG = {
  '59820efb-f3bf-4d9c-b37e-717b5b269e9c': {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    requestConfig: {
      headers: {},
      queryParams: [],
      body: '',
    },
    response: {
      headers: {
        content: 'application/json',
      },
      schema: {
        // student name address rollnumber
      },
    },
  },
};

const API_TEMPLATES = {
  'bf53ead6-1350-4652-8043-885354a632d9': {
    container: {
      tag: 'div',
      attrs: {
        className: 'bg-grey-200 hover:bg-grey-100 w-full',
      },
    },
    nodes: [
      {
        tag: 'div',
        attrs: {
          className: 'bg-pink-100 w-full',
        },
        text: '{item.rollNo}',
      },
      {
        tag: 'div',
        attrs: {
          className: 'bg-pink-100 w-full',
        },
        text: '{item.name}',
      },
      {
        tag: 'div',
        attrs: {
          className: 'bg-pink-100 w-full',
        },
        text: '{item.address}',
      },
    ],
  },
};

const NODES = [
  {
    tag: 'div',
    attrs: {
      className: 'bg-pink-100 w-full',
    },
    children: [
      {
        component: 'ApiView',
        attrs: {
          api: '59820efb-f3bf-4d9c-b37e-717b5b269e9c',
          template: 'bf53ead6-1350-4652-8043-885354a632d9',
        },
      },
      {
        component: 'List',
        attrs: {
          className: 'text-blue-500',
          name: 'abc',
        },
        text: 'This is the H2 text',
      },
      {
        tag: 'h1',
        attrs: {
          className: 'text-gray-800',
        },
        text: 'This is the H1 text',
      },
      {
        tag: 'span',
        attrs: {
          className: 'text-red-500',
        },
        text: 'Someting Span Text',
      },
    ],
  },
];

// import React from 'react';

// import { GetStaticProps } from 'next';

// import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
// import { Meta } from '../layout/Meta';
// import { IPaginationProps } from '../pagination/Pagination';
// import { Main } from '../templates/Main';
// import { Config } from '../utils/Config';
// import { getAllPosts } from '../utils/Content';

// const Index = (props: IBlogGalleryProps) => (
//   <Main
//     meta={(
//       <Meta
//         title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
//         description={Config.description}
//       />
//     )}
//   >
//     <BlogGallery posts={props.posts} pagination={props.pagination} />
//   </Main>
// );

// export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
//   const posts = getAllPosts(['title', 'date', 'slug']);
//   const pagination: IPaginationProps = {};

//   if (posts.length > Config.pagination_size) {
//     pagination.next = '/page2';
//   }

//   return {
//     props: {
//       posts: posts.slice(0, Config.pagination_size),
//       pagination,
//     },
//   };
// };

// export default Index;
