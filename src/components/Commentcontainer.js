

const commentdata = [
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [],
      },
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [],
      },
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [],
      },
    ],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [
          {
            name: "akshay jain",
            text: "lorem Ipsun dolor sit amet ,ok bye tataa",
            replies: [
              {
                name: "akshay jain",
                text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                replies: [
                  {
                    name: "akshay jain",
                    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [
          {
            name: "akshay jain",
            text: "lorem Ipsun dolor sit amet ,ok bye tataa",
            replies: [
              {
                name: "akshay jain",
                text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                replies: [
                  {
                    name: "akshay jain",
                    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [
          {
            name: "akshay jain",
            text: "lorem Ipsun dolor sit amet ,ok bye tataa",
            replies: [
              {
                name: "akshay jain",
                text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                replies: [
                  {
                    name: "akshay jain",
                    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "akshay jain",
    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
    replies: [
      {
        name: "akshay jain",
        text: "lorem Ipsun dolor sit amet ,ok bye tataa",
        replies: [
          {
            name: "akshay jain",
            text: "lorem Ipsun dolor sit amet ,ok bye tataa",
            replies: [
              {
                name: "akshay jain",
                text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                replies: [
                  {
                    name: "akshay jain",
                    text: "lorem Ipsun dolor sit amet ,ok bye tataa",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-1 shadow-sm bg-gray-100 p-1 rounded-lg m-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
        alt="useriamge"
        className="w-11 h-10 mt-1"
      />

      <div className="px-3">
        <p className="font-bold ">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((el, ind) => (
    <div key={ind}>
      <Comment data={el} />
      {/* this is one way */}
      {/* <div className="pl-5 border border-l-black ml-5">
        <Comment key={ind} data={el} />
        <Comment key={ind} data={el} />
        <Comment key={ind} data={el} />
        <Comment key={ind} data={el} />
      </div> */}

      {/* now we will call Commentlist inside this commetlist this is recursion */}
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={el.replies} />
      </div>
    </div>
  ));
};

const Commentcontainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">comments:</h1>
      <CommentsList comments={commentdata} />
    </div>
  );
};


// import React from 'react'
// const Comment = ({ data }) => {
//   const{name,text,replies}=data
//   return (
//     <div>
//       <h1 className='font-bold'>name:{name}</h1>
//       <h1 className='font-bold'>text:{text}</h1>
//     </div>
//   );
  
// }

// const Commentlist = ({ comments }) => {
  
//   return comments.map((el, ind) =>
//     <div>
//        <Comment data={el} key={ind} />
//       <div className='font-bold text-red-500 ml-4 border border-l-black'>
//       <Commentlist comments={el.replies}/>

//       </div>

//     </div>
//   ) 
  
  
//  };

// const Commentcontainer = () => {
//   return (
//     <div>
//       <h1>comments:</h1>
//       <Commentlist comments={commentdata}/>
//     </div>
//   );
// };


export default Commentcontainer;
