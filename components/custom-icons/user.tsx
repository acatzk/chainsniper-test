import React, { ComponentProps } from 'react'

export const User = (props: ComponentProps<'svg'>): JSX.Element => {
  return (
    <svg
      {...props}
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.56108 2.6389C2.56108 1.29079 3.65741 0.194458 5.00553 0.194458C6.35364 0.194458 7.44997 1.29079 7.44997 2.6389C7.44997 3.98701 6.35364 5.08335 5.00553 5.08335C3.65741 5.08335 2.56108 3.98701 2.56108 2.6389ZM6.22223 6.30557H3.77778C1.29667 6.30557 0.416672 8.12243 0.416672 9.67832C0.416672 11.0698 1.15676 11.8056 2.55743 11.8056H7.44258C8.84325 11.8056 9.58334 11.0698 9.58334 9.67832C9.58334 8.12243 8.70334 6.30557 6.22223 6.30557Z"
        fill="#377FFD"
      />
    </svg>
  )
}