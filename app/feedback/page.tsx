import Feedback from "@/app/section/Feedback";

export default function FeedbackPage() {
  const dummyAnswers = {
    question1: "My answer to question 1",
    question2: "Answer for question 2",
  };

  return <Feedback userAnswers={dummyAnswers} />;
}