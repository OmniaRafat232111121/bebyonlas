import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <img src={`${post.imageBlack}`}/>
<h2>{post.title}</h2>
<ul>
            {post.cats.map((cat: any, k: any) => (
              <li key={k}>
                <img src={cat.image} />
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
