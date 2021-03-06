import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

//Import Component
import { HeaderTitle } from "../../Components";

// Actions
import { DataAnakChange, AnsDemamChange } from "../../Actions";

// Styles
import "../../Assets/style/style.css";

const IsiDataAnak1 = () => {
  const date = new Date();
  const tmpHari = date.getDay();
  const tmpBulan = date.getMonth();
  const hari =
    tmpHari === 1
      ? "Senin"
      : tmpHari === 2
      ? "Selasa"
      : tmpHari === 3
      ? "Rabu"
      : tmpHari === 4
      ? "Kamis"
      : tmpHari === 5
      ? "Jumat"
      : tmpHari === 6
      ? "Sabtu"
      : "Minggu";
  const bulan =
    tmpBulan === 0
      ? "Januari"
      : tmpBulan === 1
      ? "Februari"
      : tmpBulan === 2
      ? "Maret"
      : tmpBulan === 3
      ? "April"
      : tmpBulan === 4
      ? "Mei"
      : tmpBulan === 5
      ? "Juni"
      : tmpBulan === 6
      ? "Juli"
      : tmpBulan === 7
      ? "Agustus"
      : tmpBulan === 8
      ? "September"
      : tmpBulan === 9
      ? "Oktober"
      : tmpBulan === 10
      ? "November"
      : "Desember";
  const history = useHistory();
  const dispatch = useDispatch();
  const dataAnak = useSelector((state) => state.dataAnak);
  let [namaAnak, setNamaAnak] = useState(dataAnak.namaAnak);
  let [namaIbu, setNamaIbu] = useState(dataAnak.namaIbu);
  let [jenisKelamin, setJenisKelamin] = useState(dataAnak.jenisKelamin);
  let [tglLahir, setTglLahir] = useState(dataAnak.tglLahir);
  let [provinsi, setProvinsi] = useState(dataAnak.provinsiAnak);
  let [kota, setKota] = useState(dataAnak.kotaAnak);
  let [alamat, setAlamat] = useState(dataAnak.alamatAnak);
  let [rt, setRT] = useState(dataAnak.rtAnak);
  let [rw, setRW] = useState(dataAnak.rwAnak);
  let [kelDes, setKelDes] = useState(dataAnak.kelDesAnak);
  let [kecamatan, setKecamatan] = useState(dataAnak.kecamatanAnak);
  let [curDate] = useState(
    hari + ", " + date.getDate() + " " + bulan + " " + date.getFullYear()
  );
  let [valid, setValid] = useState(true);

  const handleNamaAnak = (event) => {
    setNamaAnak(event.target.value);
  };

  const handleNamaIbu = (event) => {
    setNamaIbu(event.target.value);
  };

  const handleJenisKelamin = (event) => {
    if (event.target.value === "1") {
      setJenisKelamin(true);
    } else {
      setJenisKelamin(false);
    }
  };

  const handleTglLahir = (event) => {
    setTglLahir(event.target.value);
    var tmpCurDate = new Date();
    var tmpTanggalLahir = new Date(event.target.value);
    var differenceInDays = Math.floor(
      (tmpCurDate.getTime() - tmpTanggalLahir.getTime()) / (1000 * 3600 * 24)
    );
    var month = Math.floor(differenceInDays / 30);
    if (month < 2 || month > 60) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleProvinsi = (event) => {
    setProvinsi(event.target.value);
  };

  const handleKota = (event) => {
    setKota(event.target.value);
  };

  const handleAlamat = (event) => {
    setAlamat(event.target.value);
  };

  const handleRT = (event) => {
    setRT(Number(event.target.value));
  };

  const handleRW = (event) => {
    setRW(Number(event.target.value));
  };

  const handleKelDes = (event) => {
    setKelDes(event.target.value);
  };

  const handleKecamatan = (event) => {
    setKecamatan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(DataAnakChange("NAMA_ANAK", namaAnak));
    dispatch(DataAnakChange("NAMA_IBU", namaIbu));
    dispatch(DataAnakChange("JENIS_KELAMIN", jenisKelamin));
    dispatch(DataAnakChange("TANGGAL_LAHIR", tglLahir));
    dispatch(DataAnakChange("PROVINSI", provinsi));
    dispatch(DataAnakChange("KOTA", kota));
    dispatch(DataAnakChange("ALAMAT", alamat));
    dispatch(DataAnakChange("RT", rt));
    dispatch(DataAnakChange("RW", rw));
    dispatch(DataAnakChange("KELURAHAN_DESA", kelDes));
    dispatch(DataAnakChange("KECAMATAN", kecamatan));
    let tmpCurDate = new Date();
    let tmpTanggalLahir = new Date(tglLahir);
    let differenceInDays = Math.floor(
      (tmpCurDate.getTime() - tmpTanggalLahir.getTime()) / (1000 * 3600 * 24)
    );
    let month = Math.floor(differenceInDays / 30);
    if (month >= 12) {
      let year = Math.floor(month / 12);
      let tmpMonth = month % 12;
      let umur = year + " tahun ";
      if (tmpMonth !== 0) {
        umur += tmpMonth + " bulan";
      }
      dispatch(DataAnakChange("DISPLAY_UMUR_ANAK", umur));
    } else {
      let umur2 = month + " bulan";
      dispatch(DataAnakChange("DISPLAY_UMUR_ANAK", umur2));
    }
    dispatch(AnsDemamChange("UMUR_ANAK", month));
    dispatch(DataAnakChange("UMUR_ANAK", differenceInDays));
    dispatch(DataAnakChange("UMUR_ANAK_BULAN", Number(differenceInDays / 30)));
    dispatch(
      DataAnakChange("UMUR_ANAK_TAHUN", Number(differenceInDays / 30 / 12))
    );
    dispatch(
      DataAnakChange("TANGGAL_KUNJUNGAN", tmpCurDate.toISOString().slice(0, 10))
    );
    dispatch(DataAnakChange("KUNJUNGAN_PERTAMA", true));
    history.push("2");
  };

  return (
    <div>
      <HeaderTitle title="Isi Data Anak" />
      <h4 className="text-center text-muted mt-3">
        Tanggal Pemeriksaan : {curDate}
      </h4>
      <div className="d-flex justify-content-center mt-4">
        <Form className="w-75 justify-content-center" onSubmit={handleSubmit}>
          <div style={{ minHeight: "380px" }}>
            <FormGroup>
              <Label for="namaAnak">Nama Anak</Label>
              <Input
                type="text"
                name="namaAnak"
                id="namaAnak"
                placeholder="Contoh : John Doe"
                style={{ borderColor: "#46d0fe" }}
                value={namaAnak}
                onChange={handleNamaAnak}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="namaIbu">Nama Ibu</Label>
              <Input
                type="text"
                name="namaIbu"
                id="namaIbu"
                placeholder="Contoh : Jane Doe"
                style={{ borderColor: "#46d0fe" }}
                value={namaIbu}
                onChange={handleNamaIbu}
                required
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label>Jenis Kelamin</Label>
              <div className="d-flex">
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="jenisKelamin"
                      value={1}
                      onChange={handleJenisKelamin}
                      checked={jenisKelamin === true}
                      required
                    />
                    Laki-Laki
                  </Label>
                </FormGroup>
                <FormGroup check className="ml-3">
                  <Label check>
                    <Input
                      type="radio"
                      name="jenisKelamin"
                      value={2}
                      onChange={handleJenisKelamin}
                      checked={jenisKelamin === false}
                    />
                    Perempuan
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="tanggalLahir">Tanggal Lahir</Label>
              <InputGroup>
                <Input
                  type="date"
                  name="tanggalLahir"
                  id="tanggalLahir"
                  placeholder="Contoh : John Doe"
                  style={{ borderColor: "#46d0fe" }}
                  value={tglLahir}
                  onChange={handleTglLahir}
                  required
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: "#46d0fe",
                      borderColor: "#46d0fe",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarDay}
                      style={{ color: "white" }}
                    />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FormText className={`${valid === true ? "d-none" : ""}`}>
                <small className="text-danger">
                  Umur anak harus diantara 2 bulan - 5 tahun
                </small>
              </FormText>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm={2}>
                  <Label for="provinsi">Provinsi</Label>
                </Col>
                <Col sm={2}>
                  <Label for="alamat">Kota</Label>
                </Col>
                <Col sm={2}>
                  <Label for="alamat">Alamat</Label>
                </Col>
                <Col sm={1}>
                  <Label for="rt">RT</Label>
                </Col>
                <Col sm={1}>
                  <Label for="rt">RW</Label>
                </Col>
                <Col sm={2}>
                  <Label for="kelurahan/desa">Kelurahan/Desa</Label>
                </Col>
                <Col sm={2}>
                  <Label for="kota/kecamatan">Kecamatan</Label>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>
                  <Input
                    type="select"
                    name="provinsi"
                    id="provinsi"
                    defaultValue={provinsi === "" ? "Provinsi" : provinsi}
                    style={{ borderColor: "#46d0fe" }}
                    onChange={handleProvinsi}
                    required
                  >
                    <option defaultChecked disabled>
                      Provinsi
                    </option>
                    <option value={1}>Aceh</option>
                    <option value={2}>Bali</option>
                    <option value={3}>Banten</option>
                    <option value={4}>Bengkulu</option>
                    <option value={5}>Gorontalo</option>
                    <option value={6}>Jakarta</option>
                    <option value={7}>Jambi</option>
                    <option value={8}>Jawa Barat</option>
                    <option value={9}>Jawa Tengah</option>
                    <option value={10}>Jawa Timur</option>
                    <option value={11}>Kalimantan Barat</option>
                    <option value={12}>Kalimantan Selatan</option>
                    <option value={13}>Kalimantan Tengah</option>
                    <option value={14}>Kalimantan Timur</option>
                    <option value={15}>Kalimantan Utara</option>
                    <option value={16}>Kepulauan Bangka Belitung</option>
                    <option value={17}>Kepulauan Riau</option>
                    <option value={18}>Lampung</option>
                    <option value={19}>Maluku</option>
                    <option value={20}>Maluku Utara</option>
                    <option value={21}>Nusa Tenggara Barat</option>
                    <option value={22}>Nusa Tenggara Timur</option>
                    <option value={23}>Papua</option>
                    <option value={24}>Papua Barat</option>
                    <option value={25}>Riau</option>
                    <option value={26}>Sulawesi Barat</option>
                    <option value={27}>Sulawesi Selatan</option>
                    <option value={28}>Sulawesi Tengah</option>
                    <option value={29}>Sulawesi Tenggara</option>
                    <option value={30}>Sulawesi Utara</option>
                    <option value={31}>Sumatra Barat</option>
                    <option value={32}>Sumatra Selatan</option>
                    <option value={33}>Sumatra Utara</option>
                    <option value={34}>Yogyakarta</option>
                  </Input>
                </Col>
                <Col sm={2}>
                  <Input
                    type="text"
                    name="kota"
                    id="kota"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="Kota"
                    value={kota}
                    onChange={handleKota}
                    required
                  />
                </Col>
                <Col sm={2}>
                  <Input
                    type="text"
                    name="alamat"
                    id="alamat"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="Alamat"
                    value={alamat}
                    onChange={handleAlamat}
                    required
                  />
                </Col>
                <Col sm={1}>
                  <Input
                    type="number"
                    name="rt"
                    id="rt"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="RT"
                    value={rt}
                    onChange={handleRT}
                    required
                  />
                </Col>
                <Col sm={1}>
                  <Input
                    type="number"
                    name="rw"
                    id="rw"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="RW"
                    value={rw}
                    onChange={handleRW}
                    required
                  />
                </Col>
                <Col sm={2}>
                  <Input
                    type="text"
                    name="kelDes"
                    id="kelDes"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="Kelurahan/Desa"
                    value={kelDes}
                    onChange={handleKelDes}
                    required
                  />
                </Col>
                <Col sm={2}>
                  <Input
                    type="text"
                    name="kecamatan"
                    id="kecamatan"
                    style={{ borderColor: "#46d0fe" }}
                    placeholder="Kecamatan"
                    value={kecamatan}
                    onChange={handleKecamatan}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="../MulaiPemeriksaan" style={{ textDecoration: "none" }}>
              <Button className="button-orange">Sebelumnya</Button>
            </Link>
            <Button
              className={`${
                valid === false ? "disabled" : "button-pepper-mint"
              }`}
            >
              Selanjutnya
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default IsiDataAnak1;
