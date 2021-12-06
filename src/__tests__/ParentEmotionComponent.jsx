import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import EmotionComponent from "../EmotionComponent";
import ParentEmotionComponent from "../ParentEmotionComponent";

expect.addSnapshotSerializer(createSerializer());

test("renders a snapshot of only the parent", () => {
  const { container } = render(<ParentEmotionComponent variant="bold" />);

  console.log(document.documentElement.innerHTML);

  expect(container).toMatchInlineSnapshot(`
    .emotion-1 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
      font-weight: bold;
      background-color: red;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .emotion-1:first-of-type {
      font-weight: bold;
    }

    .emotion-1:hover {
      background-color: green;
    }

    @media (min-width: 48em) {
      .emotion-1 {
        font-size: 12px;
        background: purple;
      }
    }

    .emotion-1:hover {
      background-color: darkgreen;
    }

    @media (min-width: 48em) {
      .emotion-1 {
        font-size: 12px;
        background: darkred;
      }
    }

    <div>
      <p
        class="emotion-0 emotion-1 emotion-2"
      >
        Some Text 
        bold
      </p>
    </div>
  `);
});

test("renders a snapshot of the parent", () => {
  const { container } = render(
    <>
      <EmotionComponent variant="bold" />
      <ParentEmotionComponent variant="italic" />
    </>
  );

  console.log(document.documentElement.innerHTML);

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

    .emotion-3 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
      background-color: red;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-weight: italic;
    }

    .emotion-3:first-of-type {
      font-weight: bold;
    }

    .emotion-3:hover {
      background-color: green;
    }

    @media (min-width: 48em) {
      .emotion-3 {
        font-size: 12px;
        background: purple;
      }
    }

    .emotion-3:hover {
      background-color: darkgreen;
    }

    @media (min-width: 48em) {
      .emotion-3 {
        font-size: 12px;
        background: darkred;
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
        class="emotion-2 emotion-3 emotion-1"
      >
        Some Text 
        italic
      </p>
    </div>
  `);
});
