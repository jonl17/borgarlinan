import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { selectCategoryFilter } from "../../../../../../state/actions"

/** components */
import { CategoryBox, Item, Button } from "./Styled"

const filterItemHeight = 50

const CategoryFilter = ({
  data: {
    site: {
      siteMetadata: { utgefid_efni_filter_items },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  const skyrslurCategoryFilterOpen = useSelector(
    state => state.reducer.skyrslurCategoryFilterOpen
  )
  const skyrslurCategoryFilter = useSelector(
    state => state.reducer.skyrslurCategoryFilter
  )
  const dispatch = useDispatch()
  const language = useSelector(state => state.reducer.language)
  return (
    <CategoryBox
      device={device}
      height={
        skyrslurCategoryFilterOpen || device === `browser`
          ? utgefid_efni_filter_items.length * filterItemHeight + "px"
          : 1 * filterItemHeight + "px"
      }
    >
      {utgefid_efni_filter_items.map((item, index) => (
        <Item
          device={device}
          border={index !== 0}
          className="bold"
          itemheight={filterItemHeight + "px"}
          onClick={() => dispatch(selectCategoryFilter(item.name))}
        >
          <Button selected={skyrslurCategoryFilter === item.name}></Button>
          {language === `icelandic` ? item.name : item.name_en}
        </Item>
      ))}
    </CategoryBox>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            utgefid_efni_filter_items {
              name
              name_en
            }
          }
        }
      }
    `}
    render={data => <CategoryFilter data={data} {...props}></CategoryFilter>}
  ></StaticQuery>
)
