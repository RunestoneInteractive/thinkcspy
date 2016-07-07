Studio: Blurring an image
=========================

Blurring an image can be useful for de-noising an image for image processing such as object recognition and edge detection. Blurring can be achieved with a simple algorithm which averages each pixel with those around it. To visualize the algorithm, imagine a stencil which you can center over a pixel with the following shape:

+---+---+---+
|   | 3 |   |
+---+---+---+
| 3 | 8 | 3 |
+---+---+---+
|   | 3 |   |
+---+---+---+

The 8 goes over the pixel we're currently working with and each neighboring cell is covered with one of the another numbers. Each number represents a weight for the pixel it covers. In this case we weight the center pixel the most and all its neighbors less as they move away. The new value for the center pixel will be the weighted average of the pixels in the stencil weighted by each number.

To calculate the weighed average: take each color (Red, Green, and Blue) for each pixel, multiply it by the weight and add it the rest of the weight-color values; take the sum and divide it by 20. 20 comes from the sum of all the weights. If you do not use all the weights, only use the sum of the ones you did use. The new value represents the blurred color for the pixel. Repeat this process for all pixels in the image.

You could use this image referenced by `Luther.jpg`.

.. raw:: html

    <img src="../_static/LutherBellPic.jpg" id="luther.jpg">

Tips
----

- Be careful! What happens when you get to an edge?
- If you use pixel indexes `i` and `j` you can access the neighbors by adding and subtracting one from those numbers, i.e.  `i+1`, `i-1`, ...

.. activecode:: studio_7

    import image
    import sys

    # Set the timeout to a larger number if timeout is occuring.
    sys.getExecutionLimit(30000)

    img = image.Image("luther.jpg")
    newimg = image.EmptyImage(img.getWidth(), img.getHeight())
    win = image.ImageWin()

    for i in range(0, img.getWidth()):
        for j in range(0, img.getHeight()):
            old_p = img.getPixel(i, j)
            # TODO: Complete the inner part of this loop to blur the image.
            # new_p = image.Pixel(255, old_p.getBlue(), old_p.getGreen())
            # newimg.setPixel(i, j, new_p)

    newimg.draw(win)
    win.exitonclick()
