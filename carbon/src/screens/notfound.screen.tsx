import { ErrorWrap } from 'components/common'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import * as React from 'react'
import { RiEmotionUnhappyLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './notfound.screen.scss'

export default function NotFoundScreen() {
  return (
    <div className="not-found-page">
      <ErrorWrap>
        <RiEmotionUnhappyLine className="unhappy-icon" />
        <h2>You are visiting a not exisited page</h2>
        <p>
          <Link to="/" className="ui-button">
            <HiOutlineArrowLeft /> Go home
          </Link>
        </p>
      </ErrorWrap>
    </div>
  )
}
