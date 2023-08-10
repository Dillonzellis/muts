import { ReactNode } from "react"

type SectionContentProps = {
  children: ReactNode,
  id?: string;
  sectionName: string,
  bgClass?: string,
}

const SectionContent = ({ id, children, sectionName, bgClass }: SectionContentProps) => {
  return (
    <div id={id} className={`${sectionName} tw-py-8 lg:tw-py-16 ${bgClass}`}>{children}</div>
  )
}

export default SectionContent;
