// @ts-nocheck
const packages = [
  {
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
  },
  {
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
  },
  {
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
  },
  {
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
  },
  {
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
  },
  {
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
  },
  {
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
  }
]

let filters = []

function handleClick(button) {
  const clickedButton = document.getElementById(button).classList

  if (button === 'all') {
    for (let filter of filters) {
      document.getElementById(filter).classList.toggle('button-active')
    }
    filters = []
  } else {
    if (clickedButton.contains('button-active')) {
      filters.splice(filters.indexOf(button), 1)
    } else {
      filters.push(button)
    }
    clickedButton.toggle('button-active')
  }

  filterPackages()
}

function filterPackages() {
  let filteredPackages = packages

  if (filters.indexOf('heavy') != -1) {
    filteredPackages = filteredPackages.filter(package => package.isHeavy)
  }
  if (filters.indexOf('fragile') != -1) {
    filteredPackages = filteredPackages.filter(package => package.isFragile)
  }
  if (filters.indexOf('priority') != -1) {
    filteredPackages = filteredPackages.filter(package => package.isPriority)
  }
  drawPackages(filteredPackages)
}

function drawPackages(packages) {
  let template = ''

  for (let package of packages) {
    template += `
      <div class="package box-border d-flex justify-content-between align-items-center">
        <p>To: ${package.to}</p>
        <p>Tracking Number: ${package.trackingNumber}</p>
      </div>
    `
  }
  // @ts-ignore
  document.getElementById('packages').innerHTML = template
}

// adds an isHeavy check to list of packages
function testIfHeavy() {
  for (let package of packages) {
    if (package.weight > 4) {
      package.isHeavy = true
    } else {
      package.isHeavy = false
    }
  }
}

// adds an isPriority check to list of packages
function testIfPriority() {
  for (let package of packages) {
    if (package.priorityLevel === 'express') {
      package.isPriority = true
    } else {
      package.isPriority = false
    }
  }
}

testIfHeavy()
testIfPriority()
drawPackages(packages)