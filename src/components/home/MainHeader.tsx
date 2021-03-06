import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const query = graphql`
	query {
		shelby: file(relativePath: { eq: "shelby-dark.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`

const MainHeader = () => {
	const data = useStaticQuery(query)

	return (
		<BackgroundImage
			Tag='div'
			fluid={[data.shelby.childImageSharp.fluid]}
			className='shelby-background'
		>
			<div className='shelby-image py-40 dark:bg-gray-900'>
				<div className='container mx-auto px-5'>
					<div className='max-w-5xl'>
						<h1 className='text-5xl lg:text-6xl tracking-normal leading-tight lg:leading-normal font-bold text-black dark:text-white'>
							We build tech for nonprofits.
						</h1>
						<p className='text-xl text-black dark:text-gray-200 max-w-lg lg:max-w-3xl'>
							We're a group of students at The University of Alabama who build
							technology solutions free-of-charge for nonprofits and those who
							do good.
						</p>
						<Link
							to='/about'
							className='inline-block font-light bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-primary-light my-5 text-white rounded-md text-lg px-8 py-3'
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</BackgroundImage>
	)

	// return (
	//   <BackgroundImage
	//     Tag='div'
	//     fluid={[
	//       'linear-gradient(rgba(0, 120, 232, 0), rgba(0, 120, 232, 0.9))',
	//       data.shelby.childImageSharp.fluid
	//     ]}
	//     className='h-screen'
	//     style={{
	//       backgroundPosition: 'bottom right',
	//       backgroundRepeat: 'no-repeat',
	//       backgroundSize: 'auto 100%'
	//     }}
	//   >
	//     <Container className='animated fadeIn'>
	//       <h1 className='display-5 text-white'>Tech for social good.</h1>
	//       <p className='lead text-white'>
	//         We make technology accessible for those that do good and bring about
	//         social change.
	//       </p>
	//       <Link to='/about'>
	//         <Button size='lg' variant='outline-light'>
	//           Learn more
	//         </Button>
	//       </Link>
	//     </Container>
	//   </BackgroundImage>
	// )
}

export default MainHeader
