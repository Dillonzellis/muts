const CopyFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <hr className="tw-border-white/20" />
      <div className="tw-py-4 tw-text-sm tw-text-center">
        ©{year} Mutual Savings Credit Union. All Rights Reserved. This Credit
        Union is federally insured by the National Credit Union Administration
      </div>
    </div>
  );
};

export default CopyFooter;
