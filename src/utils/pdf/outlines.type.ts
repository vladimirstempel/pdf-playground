export type PDFOutlineTo =
    number | [pageIndex: number, xPercentage: number, yPercentage: number]

export interface PDFOutlineItem {
    title: string
    to: PDFOutlineTo
    italic?: boolean
    bold?: boolean
}

export interface PDFOutlineItemWithChildren extends Omit<PDFOutlineItem, 'to'> {
    to?: PDFOutlineTo
    children: PDFOutline[]
    open: boolean
}

export type PDFOutline = PDFOutlineItem | PDFOutlineItemWithChildren