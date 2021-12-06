import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import EmotionComponent from "../EmotionComponent";

expect.addSnapshotSerializer(createSerializer());

test("mutating test 1", () => {
  render(<EmotionComponent variant="bold" />);
});

test("mutating test 2", () => {
  render(<EmotionComponent variant="italic" />);
});

test("renders a snapshot of the 2 variants with css", () => {
  const { container } = render(
    <>
      <EmotionComponent variant="bold" />
      <EmotionComponent variant="italic" />
    </>
  );

  // console.log(document.documentElement.innerHTML);

  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
      font-weight: bold;
    }

    .emotion-0:first-of-type {
      font-weight: bold;
    }

    .emotion-0:hover {
      background-color: green;
    }

    @media (min-width: 48em) {
      .emotion-0 {
        font-size: 12px;
        background: purple;
      }
    }

    .emotion-2 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
    }

    .emotion-2:first-of-type {
      font-weight: bold;
    }

    .emotion-2:hover {
      background-color: green;
    }

    @media (min-width: 48em) {
      .emotion-2 {
        font-size: 12px;
        background: purple;
      }
    }

    <div>
      <p
        class="emotion-0 emotion-1"
      >
        Some Text 
        bold
      </p>
      <p
        class="emotion-2 emotion-1"
      >
        Some Text 
        italic
      </p>
    </div>
  `);
});
