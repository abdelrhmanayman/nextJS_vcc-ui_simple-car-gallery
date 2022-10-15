import { Flex, Logo } from "vcc-ui";


const NavBar = () => {
    return (
        <Flex extend={{ padding: 16 }}>
            <Logo type="spreadmark" alt="Volvo Cars" height={20} />
        </Flex>
    );
}

export { NavBar }