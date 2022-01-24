# React Zodiac App

**Visit the live demo here:** [Live Demo](https://alchemy-react-zodiac.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |


| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| All components have no errors (esspecially `imports`, `className` or `key` errors) in the console  |  1 |
| `App()` : renders `Header`, `Footer`, and `Main` |1|
| `App()` : passes props correctly to `Header` and `Footer` |1|
| `App()` : imports zodiac data array and passes is as props `Main` |1|
| `Main({ zodiacs })` : maps over the zodiac array in props without errors.  |1|
| `Main({ zodiacs })` : renders a `ZodiacCard` for each item in the array, suppling a `name`, `dates`, and unique `key` prop to each `ZodiacCard`.  |2|
| `Header({ name } )` : Renders a header with a `name` prop correctly rendered |1|
| `Footer({ year })` : renders a footer with a `year` prop correctly rendered |1|
| `ZodiacCard({ name, dates })` : renders the zodiac name, image, and dates using `name` and `dates` props |1|

![image](https://user-images.githubusercontent.com/16160135/150245785-4ec1930b-ebb9-4bc5-9aee-edb7048d0644.png)


