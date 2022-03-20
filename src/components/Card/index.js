import Link from 'next/link'
import React from 'react'
import {CardMain,Title,Circle} from './styles'

export default function Card(props) {
  return (
    <Link href={props.path} passHref>
      <CardMain>
          <Circle>
              {props.number}
          </Circle>
          <Title>
              {props.name}
          </Title>
      </CardMain>
    </Link>
  )
}
