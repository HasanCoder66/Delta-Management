// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Button,
//   } from "@material-tailwind/react";
//    import styles from "../style";
//   export default function ExtraCard ({data}) {
//     return (
//       <Card className="w-full max-w-[48rem] lg:flex-row flex-col text-white mb-[2rem] mt-[2rem] ">
//         <CardHeader
//           shadow={false}
//           floated={false}
//           className="m-0 w-2/5 shrink-0 rounded-r-none"
//         >
//           <img
//             src={data?.imgUrl}
//             alt="card-image"
//            className=" h-[50vw] w-[100%] lg:h-full lg:w-[500px] object-cover"
//             // className="h-full w-[500px] object-cover "
//             // width={'100%'}
//           />
//         </CardHeader>
//         <CardBody>

          
//           <Typography variant="h6" color="gray" className="mb-4 uppercase">
            
//            {data?.heading}
//           </Typography>
         
//           <Typography color="gray" className="mb-8 font-normal">
//             {data?.content}
//           </Typography>
//           <a href="#" className="inline-block">
//             <Button variant="text" className={`py-2 mt-2 bg-blue-gradient flex items-center gap-2  
//             font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] ${styles}`}>
            
//             {data?.btnContent}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 className="h-4 w-4"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                 />
//               </svg>
//             </Button>
//           </a>
//         </CardBody>
//       </Card>
//     );
//   }

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import styles from "../style";

export default function ExtraCard({ data }) {
  return (
    <Card className="relative w-full max-w-[48rem] lg:flex-row flex-col text-white mb-[2rem] mt-[2rem]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <div className="relative h-full w-full">
          <img
            src={data?.imgUrl}
            alt="card-image"
            className="absolute inset-0 h-full w-full object-cover rounded-r-none"
            style={{ zIndex: 1 }} // Set z-index property
          />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className={`mb-4 uppercase ${styles.heading3}`}>
          {data?.heading}
        </Typography>
        <Typography color="gray"  className={` ${styles.paragraph}mb-[2rem] font-normal`}>
          {data?.content}
        </Typography>
        {/* <a href="" className="inline-block"> */}
          <Button
            variant="text"
            className={`py-2 mt-2 bg-blue-gradient flex items-center gap-2 font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] ${styles}`}
          >
            {data?.btnContent}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        {/* </a> */}
      </CardBody>
    </Card>
  );
}
