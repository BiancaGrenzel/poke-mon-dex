import CardList from "../../components/Card-List";
import FilterCard from "../../components/Filter-Card";
import Input from "../../components/Input";
import { Box, Section } from "../../layouts";
import { useDataContext } from "../../context";

const Home = () => {
  const { search, setSearch } =
    useDataContext();

  return (
    <Section>
      <Input
        placeholder="Pesquisar por nome ou número"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <Box justifyContent="space-around" width="100%">
        <FilterCard />
        <CardList />
      </Box>
    </Section>
  );
};

export default Home;
