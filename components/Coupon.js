export default function Coupon() {
  return (
    <>
      <div className="coupon">
        <div className="background-black"></div>
        <div className="modal"></div>
      </div>
      <style jsx>{`
        .coupon {
          background-color: none;
        }
        .background-black {
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
