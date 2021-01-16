import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';

import getDataByIP from '../../utils/ipLocation';

const Landing = (props) => {
  const [ipData, setIpData] = useState();

  useEffect(() => {
    let isActive = true;
    (async () => {
      const data = await getDataByIP();
      if (isActive) {
        setIpData(data);
      }
    })();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="landing-page">
      <Container>
        <div className="">LandingPage</div>
        {ipData?.city && <h2>{ipData?.city}</h2>}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quod
          aliquam eaque accusantium dicta atque voluptate facilis excepturi
          molestias laudantium! Eos maiores dolores natus consequuntur sapiente,
          voluptatem illum omnis aperiam nobis officia, praesentium quis, est
          quisquam saepe consequatur alias quas. Voluptatem repellat dolor
          similique, quis vero labore modi itaque distinctio quidem sed,
          asperiores perspiciatis inventore. Vero, culpa quae sit molestiae
          aperiam ipsa porro tempora quia commodi! Unde quia esse impedit
          sapiente dolore nulla adipisci repudiandae reiciendis tenetur ratione
          illo, qui, facilis quo vel aperiam ut! Voluptatem provident officiis
          inventore optio modi laboriosam, beatae qui accusantium eaque
          molestiae maiores possimus, blanditiis saepe. Repudiandae libero,
          minima quam ipsam nihil optio sint, quasi rerum quibusdam sit delectus
          nemo eius eos labore modi! Adipisci totam velit eos? Provident,
          obcaecati, ipsam non iure velit culpa doloremque quis cum possimus rem
          inventore repellat accusantium consectetur tempore labore aut eum
          eligendi odio amet? Sequi molestiae ea fuga ad voluptatibus vero
          mollitia. Aliquam libero corporis cum quo vitae iusto vero sunt
          doloremque quod. Veritatis accusantium laudantium saepe iste voluptas,
          ut quibusdam officiis laborum quidem. Beatae accusamus eius iste
          cupiditate praesentium provident quibusdam in sint necessitatibus at
          nesciunt ipsum similique id architecto quos, minima asperiores
          voluptatum reprehenderit expedita porro magnam molestias dignissimos
          maxime laudantium! Possimus deleniti ex optio distinctio facilis
          voluptates laboriosam ea. Nulla quae hic dicta rem commodi natus ad
          numquam. A beatae iusto autem molestias excepturi commodi maiores
          voluptatibus enim quia quis quaerat ducimus quibusdam, unde vel
          mollitia accusantium. Cum odit, nostrum debitis fugit sapiente numquam
          eaque nam nemo error! Nemo dolor ipsum eligendi quisquam velit
          pariatur repellendus iusto vitae. Molestias ducimus eum optio atque
          cumque libero vel incidunt tempore minus pariatur odit possimus enim
          beatae eos quas modi consectetur similique ex, quisquam in illo nam?
          Obcaecati sunt accusamus aut placeat vitae modi, atque corrupti
          voluptatem nostrum qui doloremque ullam dolore corporis quis
          praesentium omnis accusantium tempora quibusdam laborum! Neque
          recusandae aspernatur ipsum consequuntur sunt deleniti repellat quos
          officia qui labore voluptates saepe quae sapiente numquam a delectus
          nulla fugiat, nemo dolore iure. Facilis consectetur, fugit quae
          sapiente temporibus doloremque. Porro quibusdam saepe ipsam recusandae
          voluptates soluta maiores quasi repellendus incidunt, eveniet ut
          deserunt unde inventore laboriosam repudiandae ratione odit quos at
          accusamus architecto ad reiciendis voluptatibus? Doloremque nulla
          autem iusto veniam dolores eveniet. Assumenda similique explicabo
          suscipit aperiam distinctio cum sunt earum nulla at, ipsam veritatis
          ea quaerat quisquam ad eum quo quos a temporibus accusantium error
          ullam eaque! Accusantium esse a pariatur dolorem cumque dignissimos
          commodi aspernatur, beatae impedit dolores minima nobis quis, officiis
          enim rem iste quia earum neque illum. Nihil amet iure odit, non minus
          dolorem. Earum voluptatem totam assumenda libero placeat distinctio
          reprehenderit sapiente aliquid enim culpa in perferendis ipsam itaque
          mollitia consequatur quasi ex, deserunt nobis, magnam dolorem adipisci
          nemo facilis aspernatur repudiandae! Expedita saepe eum iure, deleniti
          est illum impedit. Quasi, nihil vero. Minus iure beatae inventore
          rerum quasi esse cum. Unde fugit, porro harum, consequatur quia minima
          asperiores ad laboriosam repellendus perferendis itaque sint eos
          error, voluptates libero autem quam eius. Aperiam at laborum adipisci
          doloribus deleniti qui maxime veritatis nulla labore cupiditate in
          excepturi quidem reprehenderit repellendus, sit quo? Architecto
          impedit earum consequatur fugit minima ab velit laudantium praesentium
          repudiandae quaerat doloribus assumenda, laboriosam repellat facilis
          explicabo magnam atque sapiente sequi sunt alias cumque odit. Sed
          tempora nam cumque et ipsam hic aperiam, quos voluptatum eum porro
          quas, praesentium ut unde fugit? Cupiditate magni cum corrupti autem
          aliquid quasi voluptate fugit. Vero assumenda natus, sequi quae, amet
          deleniti iure eligendi quasi obcaecati delectus architecto aperiam.
          Suscipit accusamus earum alias officia maiores tempore aliquam veniam
          commodi quod nihil necessitatibus ducimus quae similique officiis
          sequi, saepe ea hic quam, cupiditate enim ipsam nostrum pariatur
          impedit? Ipsa obcaecati in qui mollitia consequuntur voluptate
          dignissimos, atque adipisci minus doloribus commodi fuga iusto eaque
          aperiam illum nostrum laboriosam doloremque totam rerum voluptates
          perspiciatis. Neque, commodi culpa porro molestias sapiente nemo ipsa
          debitis quia eius eligendi odio! Iusto, doloremque sed reiciendis esse
          enim in consequatur accusamus omnis. Eaque tempora officia unde
          soluta, quis odio dolore rerum sed odit asperiores vel ullam velit
          dolores tenetur amet corrupti animi sit! Mollitia est cum explicabo
          maxime molestiae, eum at voluptates accusantium eveniet sint non
          consequuntur laborum sit voluptatibus perspiciatis omnis doloremque.
          Quasi porro eum officia, ex minus possimus praesentium aperiam qui.
          Voluptate obcaecati ducimus ea cum incidunt molestias sequi? Ex
          architecto distinctio eius facere ipsum. Inventore hic quas obcaecati
          possimus et assumenda rem consectetur repellendus debitis consequatur
          harum, quis iure corporis, molestiae nam! Libero quidem, dignissimos
          pariatur eaque ad nobis et deserunt suscipit at ratione? Est,
          temporibus, doloribus cum sequi laboriosam maxime perferendis,
          veritatis magni id reprehenderit in magnam. Tempore itaque commodi
          dolorem quos magnam similique porro ipsa nesciunt, cum cumque impedit
          error maiores illum. Ut molestiae, repellendus quas est doloremque
          quia facere cum ex beatae nobis consectetur nihil. Iusto ducimus nobis
          quasi ipsam debitis, odio eligendi tempore vero cupiditate sequi
          dolorum cum architecto facere. Eum sapiente cumque temporibus
          repudiandae nemo doloremque eaque pariatur earum alias tenetur,
          quibusdam itaque minus eius quae sequi mollitia eveniet optio
          cupiditate aliquid repellat illo placeat. Expedita molestias enim
          totam harum magnam sint, quod libero rem quisquam. Explicabo
          voluptatem odio porro adipisci dolore esse repudiandae, nisi provident
          perferendis assumenda. Earum, a perspiciatis fugit quae qui vitae
          accusamus mollitia praesentium nostrum itaque harum, delectus
          veritatis velit ipsa accusantium ea quos placeat blanditiis natus
          iusto. Repellat eveniet aspernatur esse reiciendis. Cumque
          voluptatibus reiciendis itaque aspernatur suscipit a, accusantium
          eveniet quis eius repellendus vel impedit adipisci vero numquam
          corrupti voluptatum culpa, ratione odit dolores, vitae quod illum
          mollitia! Quae in laudantium facilis accusantium vitae explicabo vero
          doloribus, deserunt consequuntur? Vitae pariatur maxime facilis quas
          aliquam, fugiat perferendis debitis? Eaque aut ad deleniti ab sed nemo
          sit nisi ratione nulla vel aliquam placeat magnam dolorem tempore
          voluptas, earum, veritatis quidem tenetur officia aperiam a molestiae
          quia! Debitis dolorem nihil placeat deserunt magni cum qui corrupti
          vitae alias similique assumenda aperiam blanditiis beatae nobis harum,
          sed ab aut quisquam sequi possimus tenetur! Dicta aperiam fugiat
          doloremque exercitationem!
        </p>
      </Container>
    </div>
  );
};

export default Landing;
