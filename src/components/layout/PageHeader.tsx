interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="py-12" style={{ backgroundColor: "#C0C0C0" }}>
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2E92] mb-2">
          {title}
        </h1>
        {subtitle && <p className="text-[#FF0000] text-lg">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
