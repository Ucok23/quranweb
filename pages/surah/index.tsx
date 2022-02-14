import { GetStaticProps, NextPage } from 'next';
import { default as jsonData} from '../../data/jsonResolver';

interface Surah {
    name: string
}

interface SurahProps {
    surah: Surah;
}

const SurahUI: NextPage<SurahProps> = ({ surah }) => {
    return <div>{surah.name}</div>
}

export const getStaticProps: GetStaticProps = async () => {
    const data = jsonData.data;
    const surah: string = data.map((item: any) => {
        const surahItem = { ...item }
        // delete surahItem.verses;
        // delete surahItem.preBismillah
        return surahItem.transliteration.id;
    })

    return {
        props: {
            name: surah
        }
    }
}

export default SurahUI