import { ReactNode } from "react"

type SectionContentProps = {
  children: ReactNode,
  sectionName: string,
  bgClass?: string,
}

const SectionContent = ({ children, sectionName, bgClass }: SectionContentProps) => {
  return (
    <div className={`${sectionName} tw-py-8 lg:tw-py-16 ${bgClass}`}>{children}</div>
  )
}

export default SectionContent;
