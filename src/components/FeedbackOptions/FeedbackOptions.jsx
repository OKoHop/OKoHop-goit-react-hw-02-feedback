import { Button } from './FeedbackOpt.style';

export const FeedbackOptions = ({
  updateGoodStatistics,
  updateNeutralStatistics,
  updateBadStatistics,
}) => {
  return (
    <>
      <Button type="button" onClick={updateGoodStatistics}>
        Good
      </Button>
      <Button type="button" onClick={updateNeutralStatistics}>
        Neutral
      </Button>
      <Button type="button" onClick={updateBadStatistics}>
        Bad
      </Button>
    </>
  );
};
