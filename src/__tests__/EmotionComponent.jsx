import React from 'react'
import { render } from '@testing-library/react'
import serializer from 'jest-emotion'
import EmotionComponent from '../EmotionComponent'

expect.addSnapshotSerializer(serializer)

test.skip('mutating test 1', () => {
  render(<EmotionComponent variant="bold" />)
})

test('mutating test 2', () => {
  render(<EmotionComponent variant="italic" />)
})

test('renders a snapshot of the 2 variants with css', () => {
  const { container } = render(
    <>
      <EmotionComponent variant="bold" />
      <EmotionComponent variant="italic" />
    </>
  )
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
      font-weight: bold;
    }

    .emotion-1 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
    }

    <div>
      <p
        class="emotion-0"
      >
        Some Text
      </p>
      <p
        class="emotion-1"
      >
        Some Text
      </p>
    </div>
  `)
})
