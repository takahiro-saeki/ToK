const base = {
  ques: [
    {
      title: '説得(すること)、説得力、信念、意見、確信',
      hint: 'communication intended to induce belief or action',
      list: [
        {
          select: 'persuasion',
          judge: true
        },
        {
          select: 'invention',
          judge: false
        },
        {
          select: 'swarthy',
          judge: false
        },
        {
          select: 'follicle',
          judge: false
        }
      ]
    },
    {
      title: '結果、成り行き、結果、帰結、結論',
      hint: 'a phenomenon that is caused by some previous phenomenon',
      list: [
        {
          select: 'consequence',
          judge: true
        },
        {
          select: 'jaundiced',
          judge: false
        },
        {
          select: 'acrimonious',
          judge: false
        },
        {
          select: 'incandescent',
          judge: false
        }
      ]
    },
    {
      title: '評判、世評、好評、名声、令名、名望',
      hint: 'the general estimation that the public has for a person',
      list: [
        {
          select: 'reputation',
          judge: true
        },
        {
          select: 'jaundiced',
          judge: false
        },
        {
          select: 'acrimonious',
          judge: false
        },
        {
          select: 'incandescent',
          judge: false
        }
      ]
    },
  ]
}

export default base;
