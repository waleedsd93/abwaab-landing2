import Head from "next/head";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import التوصيل_مجاني from "../assets/التوصيل مجاني.svg";
import خدمه_العملاء from "../assets/خدمه العملاء.svg";
import خدمه_ضامن from "../assets/خدمه ضامن.svg";
import المكافأت from "../assets/المكافأت.svg";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import WordsAnimation from "../components/WordsAnimation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>أبواب</title>
        <meta name="description" content="تطبيق ابواب" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <>
          <Section
            title={`
          ضمان في البيع و الشراء في كل شيء تحتاجه مع توصيل 
           `}
            id="home"
            reverse={true}
            columnReverse={true}
            icons={true}
            video={true}
            specialWord="مجاني"
            subtitle="بيع واشتري ما تريده"
            text="انشاء متاجر الكترونية ,أثاث,عقار,سيارات,خدمات و الكثير أختصر الطريق و حمل تطبيق أبواب"
          />
          <Info />
          <Section
            id="مميزاتنا"
            title={` توصيل مجاني!`}
            img={التوصيل_مجاني.src}
            mark={true}
            reverse={false}
            text={`و زي ما يقولون دائمًا " العميل أولًا " و عشان كذا توصيلك علينا`}
          />

          <Section
            title={`خدمة عملاء يقهوونك قبل يردون عليك !`}
            img={خدمه_العملاء.src}
            mark={true}
            reverse={true}
            text={`جايبين لكم أفضل خدمة عملاء مهتمين و حريصين بالرد بأسرع ما يمكن عليكم`}
          />

          <Section
            title={`خدمة ضامن`}
            img={خدمه_ضامن.src}
            mark={true}
            reverse={false}
            text={`اللي تدفعه بجيب التطبيق مانوصله للبائع الا لين تعطينا الأكيد`}
          />

          <WordsAnimation />

          <Section
            id="المكافأت"
            title={`نكافأك و نعز مقامك !`}
            img={المكافأت.src}
            dots={true}
            reverse={true}
            icons={true}
            columnReverse={true}
            subtitle=" المكافآت"
            text="هدايا مقدمة من أبواب لك ! و رصيد بحسابك و الكاش باك يسوى  أنك ما تفوته !"
          />
        </>

        <Testimonials />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
          className="container accordion-div"
        >
          <span>الأسئلة الشائعة</span>
          <h3>الأسئلة الشائعة</h3>
          <p>جمعنا لكم أكثر الأسئة , و أن ما حصلت سؤالك كلمنا و بنجاوبك</p>

          <Accordion
            title="كيف تضيف اعلانك ؟"
            text="حمل التطبيق سجل دخولك ضيف اعلانك"
          />
          <Accordion
            title="كيف تنشئ متجرك ؟"
            text='تكبس الزر على "إضافة متجر" الآن كل الخطوات بملعبك! اسم متجرك اختيار قسم متجرك شعار متجرك ترويسة متجر ومبروك عليك افضل متجر !'
          />
          <Accordion
            title="هل تطبيق أبواب مجاني ؟"
            text="نعم"
          />
          <Accordion
            title="كيف تنشئ حساب ؟"
            text="حمل التطبيق , ضيف أسمك ورقمك و فقط سجل دخولك"
          />
        </motion.div>

 

        <Footer />
      </main>
    </>
  );
}
