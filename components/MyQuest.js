export const MyQuest = (props) => {
  const list = props.myQuest;

  switch (list) {
    case 0:
      return <>내가 요청</>;
    case 1:
      return <>진행중</>;
    case 2:
      return <>완료</>;
    default:
      return <>내가 요청</>;
  }
};
