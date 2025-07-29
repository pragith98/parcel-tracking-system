export const TableStyles = {
  table: `
    min-w-full 
    divide-y 
    divide-gray-200 
  `,

  header: `bg-gray-50`,

  body: `
    bg-white 
    divide-y 
    divide-gray-200 
  `,

  headerRow: `
    px-4 
    py-3.5 
    text-sm 
    font-normal 
    text-left 
    rtl:text-right 
    text-gray-500
  `,

  row: `
    hover:bg-gray-100 
    transition-colors
  `,

  data: `
    px-4 
    py-4 
    text-sm 
    font-medium 
    text-gray-700 
    whitespace-nowrap
  `
}

export const FormStyles = {
  formSectionTitle: `
    text-sm 
    font-medium 
    mt-6 
    mb-2 
    text-gray-500
  `,

  formFieldLabel: `text-gray-700`,

  formField: `
    block 
    w-full 
    px-4 
    py-2 
    mt-2 
    text-gray-700 
    bg-white 
    border 
    border-gray-200 
    rounded-md  
    focus:border-blue-400 
    focus:ring-blue-300 
    focus:ring-opacity-40  
    focus:outline-none 
    focus:ring
  `,
}
