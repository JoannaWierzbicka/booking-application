import React from 'react'

export const itemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
  const background = item.status === 'pre-booking'
    ? '#ffa828'
    : item.status === 'pre-paid'
      ? '#2196f3'
      : item.status === 'paid-all'
        ? '#419e45'
        : item.status === 'cancelled'
          ? '#ababab'
          : 'red'
  return (
    <div
      {...getItemProps({
        style: {
          background,
          color: 'black',
          border: 'none',
          borderRadius: 4,
          borderRightWidth: 0
        }
      })}
    >
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

      <div
        style={{
          height: itemContext.dimensions.height,
          overflow: 'hidden',
          paddingLeft: 3,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        {item.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
    </div>
  )
}

export default itemRenderer
