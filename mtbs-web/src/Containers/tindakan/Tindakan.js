import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Button, Spinner, Container, Badge } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Wrapper } from "./style";
import { reset } from "../../Actions";
import { Tindakan as CompTindakan } from "../../Components";

const Tindakan = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let [isLoading, set_isLoading] = useState(true);
  let [hasilTindakan, set_hasilTindakan] = useState();
  let [tindakan, set_tindakan] = useState();
  let [duplicate, set_duplicate] = useState("");

  const klasifikasiTBU = useSelector((state) => state.klasifikasiTBU);
  const klasifikasiBatuk = useSelector((state) => state.klasifikasiBatuk);
  const klasifikasiDiare = useSelector((state) => state.klasifikasiDiare);
  const klasifikasiDemam = useSelector((state) => state.klasifikasiDemam);
  const klasifikasiTelinga = useSelector((state) => state.klasifikasiTelinga);
  const klasifikasiGizi = useSelector((state) => state.klasifikasiGizi);
  const klasifikasiAnemia = useSelector((state) => state.klasifikasiAnemia);
  const klasifikasiHIV = useSelector((state) => state.klasifikasiHIV);

  const ansTBU = useSelector((state) => state.ansTBU);
  const ansBatuk = useSelector((state) => state.ansBatuk);
  const ansDiare = useSelector((state) => state.ansDiare);
  const ansDemam = useSelector((state) => state.ansDemam);
  const ansTelinga = useSelector((state) => state.ansTelinga);
  const ansGizi = useSelector((state) => state.ansGizi);
  const ansAnemia = useSelector((state) => state.ansGizi);
  const ansHIV = useSelector((state) => state.ansHIV);

  const dataAnak = useSelector((state) => state.dataAnak);

  useEffect(() => {
    async function fetchResult() {
      await axios
        .post(`http://localhost:8000/Tindakan`, {
          dataAnak,
          ansTBU,
          klasifikasiTBU,
          ansBatuk,
          klasifikasiBatuk,
          ansDiare,
          klasifikasiDiare,
          ansDemam,
          klasifikasiDemam,
          ansTelinga,
          klasifikasiTelinga,
          ansGizi,
          klasifikasiGizi,
          ansAnemia,
          klasifikasiAnemia,
          ansHIV,
          klasifikasiHIV,
          klasifikasiLain: {
            klasifkasiBeratLain:
              klasifikasiTBU.tbu_status !== "success" ||
              klasifikasiBatuk.bsb_klasifikasi !== "success" ||
              klasifikasiDemam.demam_status !== "success" ||
              klasifikasiTelinga.telinga_status !== "success" ||
              klasifikasiGizi.gizi_status !== "success" ||
              klasifikasiAnemia.anemia_status !== "success" ||
              klasifikasiHIV.hiv_status !== "success",
          },
        })
        .then((res) => {
          const unique = (value, index, self) => {
            return self.indexOf(value) === index;
          };
          const uniqueDiare = res.data.diare.filter(unique);
          const uniqueDemam = res.data.demam.filter(unique);
          set_hasilTindakan([
            {
              judul: "Tanda Bahaya Umum",
              klasifikasi: klasifikasiTBU.tbu_klasifikasi,
              status: klasifikasiTBU.tbu_status,
              tindakan: res.data.tbu,
            },
            {
              judul: "Batuk atau Sukar Bernafas",
              klasifikasi: klasifikasiBatuk.bsb_klasifikasi,
              status: klasifikasiBatuk.bsb_status,
              tindakan: res.data.batuk,
            },
            {
              judul: "Diare",
              klasifikasi: klasifikasiDiare.diare_klasifikasi.replaceAll(
                "\n",
                ", "
              ),
              status: klasifikasiDiare.diare_status,
              tindakan: uniqueDiare,
            },
            {
              judul: "Demam",
              klasifikasi: klasifikasiDemam.demam_klasifikasi.replaceAll(
                "\n",
                ", "
              ),
              status: klasifikasiDemam.demam_status,
              tindakan: uniqueDemam,
            },
            {
              judul: "Telinga",
              klasifikasi: klasifikasiTelinga.telinga_klasifikasi,
              status: klasifikasiTelinga.telinga_status,
              tindakan: res.data.telinga,
            },
            {
              judul: "Gizi",
              klasifikasi: klasifikasiGizi.gizi_klasifikasi,
              status: klasifikasiGizi.gizi_status,
              tindakan: res.data.gizi,
            },
            {
              judul: "Anemia",
              klasifikasi: klasifikasiAnemia.anemia_klasifikasi,
              status: klasifikasiAnemia.anemia_status,
              tindakan: res.data.anemia,
            },
            {
              judul: "HIV",
              klasifikasi: klasifikasiHIV.hiv_klasifikasi,
              status: klasifikasiHIV.hiv_status,
              tindakan: res.data.hiv,
            },
          ]);
          set_tindakan({
            tindakan_tbu: res.data.tbu,
            tindakan_batuk: res.data.batuk,
            tindakan_diare: uniqueDiare,
            tindakan_demam: uniqueDemam,
            tindakan_telinga: res.data.telinga,
            tindakan_gizi: res.data.gizi,
            tindakan_anemia: res.data.anemia,
            tindakan_hiv: res.data.hiv,
          });
          set_duplicate(res.data.duplicate);
          set_isLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchResult();
  }, [
    dataAnak,
    ansTBU,
    klasifikasiTBU,
    ansBatuk,
    klasifikasiBatuk,
    ansDiare,
    klasifikasiDiare,
    ansDemam,
    klasifikasiDemam,
    ansTelinga,
    klasifikasiTelinga,
    ansGizi,
    klasifikasiGizi,
    ansAnemia,
    klasifikasiAnemia,
    ansHIV,
    klasifikasiHIV,
  ]);

  if (isLoading) {
    return (
      <Wrapper style={{ overflowY: "hidden" }}>
        <Container className="w-100 h-100 d-flex justify-content-center" fluid>
          <div
            style={{ minHeight: "800px" }}
            className="d-flex justify-content-center flex-column"
          >
            <Spinner className="loading-tindakan" color="primary" />
          </div>
        </Container>
      </Wrapper>
    );
  }

  const akhiriPemeriksaan = async () => {
    const data = {
      dataAnak,
      klasifikasiTBU,
      klasifikasiBatuk,
      klasifikasiDiare,
      klasifikasiDemam,
      klasifikasiTelinga,
      klasifikasiGizi,
      klasifikasiAnemia,
      klasifikasiHIV,
      tindakan,
    };
    // console.log(hasilTindakan);
    try {
      await axios.post(
        `${process.env.REACT_APP_MAIN_API}/akhiripemeriksaan`,
        data
      );
      dispatch(reset("RESET_STORE"));
      history.push("/Lobby");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className="d-flex flex-column mt-2 wrapper-tindakan">
        <div className="">
          <h3 className="text-center font-weight-bold">Tindakan</h3>
          <hr className="underline-tindakan" />
        </div>

        {hasilTindakan &&
          hasilTindakan.map((tindakan, idx) => {
            if (tindakan.status !== "info" && tindakan.tindakan.length !== 0) {
              if (tindakan.judul !== "Tanda Bahaya Umum") {
                return (
                  <CompTindakan
                    key={idx}
                    judul={tindakan.judul}
                    klasifikasi={tindakan.klasifikasi}
                    status={tindakan.status}
                    tindakan={tindakan.tindakan}
                  />
                );
              } else if (tindakan.status === "danger") {
                return (
                  <CompTindakan
                    key={idx}
                    judul={tindakan.judul}
                    klasifikasi={tindakan.klasifikasi}
                    status={tindakan.status}
                    tindakan={tindakan.tindakan}
                  />
                );
              }
            } else {
              return <React.Fragment key={idx}></React.Fragment>;
            }
          })}
        <Row
          className={`justify-content-center mt-5 ${
            duplicate === "" ? "d-none" : ""
          }`}
        >
          <Badge color="danger">Obat duplikat: {duplicate}</Badge>
        </Row>
        <Row className="justify-content-between px-5 py-0 mt-5">
          <Link to="Klasifikasi">
            <Button className="button-sebelumnya-tindakan">
              Kembali ke Halaman Klasifikasi
            </Button>
          </Link>
          <Button
            className="button-selanjutnya-tindakan"
            onClick={akhiriPemeriksaan}
          >
            Akhiri Pemeriksaan
          </Button>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Tindakan;
