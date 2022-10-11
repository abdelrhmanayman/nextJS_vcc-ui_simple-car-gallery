import { Flex, Logo } from "vcc-ui";


const NavBar: () => JSX.Element = () => {
    return (
        <Flex extend={{ padding: 16 }}>
            <Logo type="spreadmark" alt="Volvo Cars" height={20} />
        </Flex>
    );
}

export { NavBar }