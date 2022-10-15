import Card from "./card";

export default function CardRow(){
  return(
    <>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  );
}