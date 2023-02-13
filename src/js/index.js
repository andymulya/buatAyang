function play() {
        let audio = new Audio(
          "https://sndup.net/tqdx/d"
        )
        audio.play()
      }

      const swals = Swal.mixin({
        allowOutsideClick: false,
        cancelButtonColor: "#FF0040",
      })
      const swalsy = Swal.mixin({
        confirmButtonText: "Iya",
        allowOutsideClick: false,
      })
      const swalst = Swal.mixin({
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      })

      async function mulaitanya() {
        let { isConfirmed: tanyawal } = await swals.fire({
          title: `Halo Darni Yulia Putri :D, klik ya tombol dibawah hihi`,
          imageUrl: "./src/assets/img/gemoy.gif",
          imageWidth: 120,
          imageHeight: 120,
          confirmButtonText: "Okay",
          allowOutsideClick: false,
          showCancelButton: false,
        })
        if (tanyawal) {
          play()
          kuis()
        }
      }

      async function kuis() {
        await swalst.fire({
          title: "Happy Valentine Day Cantik",
          imageUrl: "./src/assets/img/bella-tontonbella.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Gimana hari-harinya? :)",
          imageUrl: "./src/assets/img/bubududu-panda.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Lelah ya hari ini? :(",
          imageUrl: "https://i.postimg.cc/02wF21b1/peach-goma.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Its okay, selamat ya udah bisa lewatin semua hal dihari ini",
          imageUrl: "https://i.postimg.cc/g06FWScx/tepukbadan.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Makannya jangan telat ya....",
          imageUrl: "./src/assets/img/bubu-dudu.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Jangan lupa minum juga..",
          imageUrl: "https://i.postimg.cc/vZWmnK2p/gigit.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Dan jangan begadang terus....",
          imageUrl: "./src/assets/img/mimibubu.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Ohiya, maap coklatnya masih otw ya hihi",
          imageUrl: "./src/assets/img/otw.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Dan maaf aku hanya bisa support kamu aja &#129402;",
          imageUrl: "https://i.postimg.cc/SsmkcNY9/bear-cute-1.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        text = "You always be my sweetheart "
        emotnama = "&#12084;"
        text2 = "Jaga diri baik-baik... Jangan sedih, kita ketemu nanti :). SAYANG BANGET DARNI YULIA PUTRI &#10084;"
        showDiv()
      }
      mulaitanya()