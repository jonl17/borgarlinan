import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterMenu } from "../../../../methods"
import { triggerNav } from "../../../../state/actions"

/** components */
import { HomeLangContainer, Item, Text, Dropdown } from "./Styled"
import LanguageButton from "../../../buttons/language"

const MenuItems = ({ navbaritems }) => {
  const device = useSelector(state => state.reducer.device)
  const language = useSelector(state => state.reducer.language)
  const navStatus = useSelector(state => state.reducer.navStatus)
  const dispatch = useDispatch()
  let itemHeight = 75
  return (
    <>
      <HomeLangContainer>
        <Item
          onClick={() => dispatch(triggerNav("closed"))}
          device={device}
          to={navbaritems[0].url}
        >
          <Text device={device} className="bold" titill>
            {navbaritems[0].name} {/*  Borgarlínan */}
          </Text>
        </Item>
        <LanguageButton>
          <Text device={device}>IS | EN</Text>
        </LanguageButton>
      </HomeLangContainer>
      <Dropdown
        device={device}
        height={
          navStatus === "open"
            ? (filterMenu(navbaritems, language).length - 1) * itemHeight + "px"
            : "0"
        }
      >
        {/* Sjá lýsingu á filterMenu falli í methods */}
        {filterMenu(navbaritems, language).map((item, index) =>
          index !== 0 ? (
            <Item
              onClick={() => dispatch(triggerNav("closed"))}
              dropdown={"true"}
              key={index}
              device={device}
              to={item.url}
            >
              <Text device={device} className="bold">
                {language === `icelandic` ? item.name : item.name_en}
              </Text>
            </Item>
          ) : (
            ""
          )
        )}
      </Dropdown>
    </>
  )
}

export default MenuItems
