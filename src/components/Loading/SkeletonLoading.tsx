import { Skeleton } from "@material-ui/lab";

const ContentLoading = () => {
  return (
    <div>
      <Skeleton width="90%" animation="wave" />
      <Skeleton width="80%" animation="wave" />
      <Skeleton width="75%" animation="wave" />
    </div>
  );
};

export default ContentLoading;
