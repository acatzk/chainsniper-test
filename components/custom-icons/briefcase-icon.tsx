import React, { ComponentProps } from 'react'

export const BriefcaseIcon = (props: ComponentProps<'svg'>): JSX.Element => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4.375H13.9583V3.33333C13.9583 2.52917 13.3042 1.875 12.5 1.875H7.5C6.69583 1.875 6.04167 2.52917 6.04167 3.33333V4.375H5C2.985 4.375 1.875 5.485 1.875 7.5V7.59918V9.37754V15C1.875 17.015 2.985 18.125 5 18.125H15C17.015 18.125 18.125 17.015 18.125 15V9.37754V7.59918V7.5C18.125 5.485 17.015 4.375 15 4.375ZM7.29167 3.33333C7.29167 3.21833 7.385 3.125 7.5 3.125H12.5C12.615 3.125 12.7083 3.21833 12.7083 3.33333V4.375H7.29167V3.33333ZM3.125 7.5C3.125 6.18583 3.68583 5.625 5 5.625H15C16.3142 5.625 16.875 6.18583 16.875 7.5V7.59918V9.37754C16.875 9.62838 16.7325 9.84745 16.5033 9.94995C15.7825 10.2716 14.5542 10.73 12.7983 11.0884C12.7125 11.1059 12.62 11.04 12.57 10.9667C11.9658 10.0642 11.0058 9.52586 10 9.52586C8.99417 9.52586 8.03417 10.0642 7.43 10.9667C7.38083 11.0409 7.29167 11.1075 7.20166 11.0884C5.44667 10.73 4.2175 10.2716 3.49667 9.94995C3.2675 9.84745 3.125 9.62838 3.125 9.37754V7.59918V7.5ZM15 16.875H5C3.68583 16.875 3.125 16.3142 3.125 15V11.15C3.91667 11.4925 5.18584 11.9517 6.95084 12.3125C7.52584 12.4292 8.12417 12.175 8.46834 11.6609C8.84 11.1059 9.4125 10.775 10 10.775C10.5875 10.775 11.16 11.1059 11.5308 11.6609C11.8192 12.0917 12.2842 12.3408 12.7667 12.3408C12.86 12.3408 12.9542 12.3317 13.0475 12.3125C14.8133 11.9517 16.0825 11.4925 16.8742 11.15V15C16.875 16.3142 16.3142 16.875 15 16.875ZM10.85 12.5C10.85 12.96 10.4767 13.3333 10.0167 13.3333C9.55667 13.3333 9.17917 12.96 9.17917 12.5C9.17917 12.04 9.5475 11.6667 10.0083 11.6667H10.0167C10.4767 11.6667 10.85 12.04 10.85 12.5Z"
        fill="currentColor"
      />
    </svg>
  )
}