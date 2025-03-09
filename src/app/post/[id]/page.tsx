type Props = {
  params: {
    id: number;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <div>ID : {params.id} Page</div>;
};

export default PostDetailPage;
