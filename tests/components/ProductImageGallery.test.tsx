import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Product Image Gallery", () => {
  it("it should render null when imageUrls is empty array.", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("it should render image list when imageUrls is provided.", () => {
    const imageUrls = ["img_url_1", "img_url_2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);

    imageUrls.forEach((img, index) => {
      expect(images[index]).toHaveAttribute("src", img);
    });
  });
});
