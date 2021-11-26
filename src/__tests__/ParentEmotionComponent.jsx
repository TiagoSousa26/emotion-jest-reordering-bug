import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import EmotionComponent from "../EmotionComponent";
import ParentEmotionComponent from "../ParentEmotionComponent";

expect.addSnapshotSerializer(createSerializer());

test("renders a snapshot of the parent", () => {
  const { container } = render(
    <>
      <EmotionComponent variant="bold" />
      <ParentEmotionComponent variant="italic" />
    </>
  );

  console.log(document.documentElement.innerHTML);

  // On the ParentEmotionComponent is missing the styles defined there
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
      font-weight: bold;
    }

    .emotion-2 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      background-color: hotpink;
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
