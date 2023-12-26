export default function Header() {
  return (
    <>
      <div className="box-border h-10 bg-secondary">
        <p className="text-white text-sm font-header text-center pt-2">
          Get Up to 50% discount on your first order!
        </p>
        <div className=" box-border w-full left-100 top-100 absolute justify-center items-center gap-40 inline-flex bg-background">
          <div className=" text-black text-3xl font-bold font-logo">
            SHOP.CO
          </div>
        </div>
      </div>
    </>
  );
}
